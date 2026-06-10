import { PAPER_SIZES, type PaperSizeId } from "@/lib/paperSizes";

type ExportOptions = {
  node: HTMLElement | null;
  fileName: string;
  paperSize?: PaperSizeId;
  watermark?: boolean;
};

function withExportWatermark<T>(
  node: HTMLElement,
  watermark: boolean,
  exportWork: () => Promise<T>
): Promise<T> {
  const previous = node.dataset.exporting;

  if (watermark) {
    node.dataset.exporting = "free";
  } else {
    delete node.dataset.exporting;
  }

  return new Promise((resolve, reject) => {
    requestAnimationFrame(() => {
      exportWork()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          if (previous) {
            node.dataset.exporting = previous;
          } else {
            delete node.dataset.exporting;
          }
        });
    });
  });
}

function downloadDataUrl(dataUrl: string, fileName: string): void {
  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export async function downloadSignAsPng({
  node,
  fileName,
  watermark = true
}: ExportOptions): Promise<void> {
  if (!node) {
    throw new Error("Preview is not ready yet.");
  }

  const { toPng } = await import("html-to-image");

  const dataUrl = await withExportWatermark(node, watermark, () =>
    toPng(node, {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: "#ffffff"
    })
  );

  downloadDataUrl(dataUrl, fileName);
}

export async function downloadSignAsPdf({
  node,
  fileName,
  paperSize = "4x6",
  watermark = true
}: ExportOptions): Promise<void> {
  if (!node) {
    throw new Error("Preview is not ready yet.");
  }

  const { toPng } = await import("html-to-image");
  const { default: jsPDF } = await import("jspdf");
  const size = PAPER_SIZES[paperSize];

  const dataUrl = await withExportWatermark(node, watermark, () =>
    toPng(node, {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: "#ffffff"
    })
  );

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "in",
    format: [size.widthIn, size.heightIn]
  });

  pdf.addImage(dataUrl, "PNG", 0, 0, size.widthIn, size.heightIn);
  pdf.save(fileName);
}
