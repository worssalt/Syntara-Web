/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from "@testing-library/react-hooks"
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { useCurrency } from "./useCurrency"

// helper to flush promises
const flushPromises = () => new Promise(process.nextTick)

describe("useCurrency", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn())
    // clear localStorage mocks
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(),
      setItem: vi.fn(),
    } as unknown as Storage)
    // default navigator.language
    Object.defineProperty(navigator, "language", {
      value: "en-US",
      configurable: true,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("uses cached value if present", async () => {
    const getItem = vi.fn().mockReturnValue("€")
    vi.stubGlobal("localStorage", { getItem, setItem: vi.fn() } as unknown as Storage)

    const { result } = renderHook(() => useCurrency())
    expect(result.current.symbol).toBe("€")
    expect(result.current.ready).toBe(true)
    expect(global.fetch).not.toHaveBeenCalled()
  })

  it("detects Peru from API and caches it", async () => {
    const fetchMock = global.fetch as any
    fetchMock.mockResolvedValueOnce({ ok: true, json: async () => ({ country_code: "PE" }) } as unknown as Response)
    const setItem = vi.fn()
    vi.stubGlobal("localStorage", { getItem: () => null, setItem } as unknown as Storage)

    const { result } = renderHook(() => useCurrency())
    await act(async () => {
      await flushPromises()
    })

    expect(result.current.symbol).toBe("S/")
    expect(result.current.ready).toBe(true)
    expect(setItem).toHaveBeenCalledWith("currencySymbol", "S/")
  })

  it("falls back to navigator when fetch fails", async () => {
    const fetchMock = global.fetch as any
    fetchMock.mockRejectedValueOnce(new Error("network"))
    vi.stubGlobal("localStorage", { getItem: () => null, setItem: vi.fn() } as unknown as Storage)
    Object.defineProperty(navigator, "language", { value: "es-PE", configurable: true })

    const { result } = renderHook(() => useCurrency())
    await act(async () => {
      await flushPromises()
    })

    expect(result.current.symbol).toBe("S/")
    expect(result.current.ready).toBe(true)
  })

  it("defaults to dollar for non-Peru languages", async () => {
    const fetchMock = global.fetch as any
    fetchMock.mockRejectedValueOnce(new Error("network"))
    vi.stubGlobal("localStorage", { getItem: () => null, setItem: vi.fn() } as unknown as Storage)
    Object.defineProperty(navigator, "language", { value: "en-GB", configurable: true })

    const { result } = renderHook(() => useCurrency())
    await act(async () => {
      await flushPromises()
    })

    expect(result.current.symbol).toBe("$")
    expect(result.current.ready).toBe(true)
  })
})
