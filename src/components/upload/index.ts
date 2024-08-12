import dynamic from "next/dynamic";

export { default as MultiFilePreview } from "./preview_multi_file";
export { default as RejectionFiles } from "./errors_rejection_files";
export { default as SingleFilePreview } from "./preview_single_file";

export const Upload = dynamic(() => import("./upload"), {
	ssr: false,
});

export const UploadBox = dynamic(() => import("./upload_box"), {
	ssr: false,
});

export const UploadAvatar = dynamic(() => import("./upload_avatar"), {
	ssr: false,
});
