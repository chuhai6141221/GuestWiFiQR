export type SecurityType = "WPA" | "WEP" | "nopass";

export type GenerateWifiQrStringInput = {
  ssid: string;
  password?: string;
  security?: SecurityType;
  hidden?: boolean;
};

export function escapeWifiValue(value: string): string {
  return value.replace(/([\\;,:"])/g, "\\$1");
}

export function generateWifiQrString({
  ssid,
  password,
  security = "WPA",
  hidden = false
}: GenerateWifiQrStringInput): string {
  const escapedSsid = escapeWifiValue(ssid);
  const escapedPassword = password ? escapeWifiValue(password) : "";

  if (security === "nopass") {
    return `WIFI:T:nopass;S:${escapedSsid};H:${hidden ? "true" : "false"};;`;
  }

  return `WIFI:T:${security};S:${escapedSsid};P:${escapedPassword};H:${hidden ? "true" : "false"};;`;
}
