import { describe, expect, it } from "vitest";

import { escapeWifiValue, generateWifiQrString } from "../src/lib/wifiQr";

describe("escapeWifiValue", () => {
  it("escapes WiFi QR special characters", () => {
    expect(escapeWifiValue('Cafe;Guest,Floor:2"East"\\Main')).toBe(
      'Cafe\\;Guest\\,Floor\\:2\\"East\\"\\\\Main'
    );
  });
});

describe("generateWifiQrString", () => {
  it("generates WPA QR strings with a normal password", () => {
    expect(
      generateWifiQrString({
        ssid: "Guest WiFi",
        password: "welcome123",
        security: "WPA"
      })
    ).toBe("WIFI:T:WPA;S:Guest WiFi;P:welcome123;H:false;;");
  });

  it("generates WEP QR strings", () => {
    expect(
      generateWifiQrString({
        ssid: "Legacy Guest",
        password: "abc123",
        security: "WEP"
      })
    ).toBe("WIFI:T:WEP;S:Legacy Guest;P:abc123;H:false;;");
  });

  it("generates nopass QR strings", () => {
    expect(
      generateWifiQrString({
        ssid: "GuestWifi",
        security: "nopass"
      })
    ).toBe("WIFI:T:nopass;S:GuestWifi;H:false;;");
  });

  it("escapes special characters in SSID", () => {
    expect(
      generateWifiQrString({
        ssid: 'Guest;WiFi,Floor:2"\\',
        password: "welcome123",
        security: "WPA"
      })
    ).toBe('WIFI:T:WPA;S:Guest\\;WiFi\\,Floor\\:2\\"\\\\;P:welcome123;H:false;;');
  });

  it("escapes special characters in password", () => {
    expect(
      generateWifiQrString({
        ssid: "Guest WiFi",
        password: 'pass;word,with:chars"\\',
        security: "WPA"
      })
    ).toBe('WIFI:T:WPA;S:Guest WiFi;P:pass\\;word\\,with\\:chars\\"\\\\;H:false;;');
  });

  it("sets hidden network flag", () => {
    expect(
      generateWifiQrString({
        ssid: "Hidden Guest",
        password: "secret",
        security: "WPA",
        hidden: true
      })
    ).toBe("WIFI:T:WPA;S:Hidden Guest;P:secret;H:true;;");
  });
});
