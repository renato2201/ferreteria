import Image from "next/image";

export default function Page() {
	return (
		<div className="bg-white mx-auto max-w-screen-xl p-5 flex flex-col items-center justify-center">
			<Image
				src={
					"https://imgs.search.brave.com/74LG3UFZuWnW_QVDlAuAVqqyevBYwk3dGloh5YzAtXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/MTMwNzYtTUxNNzQ1/MDQ3NzI0ODNfMDIy/MDI0LVcud2VicA"
				}
				alt="Image"
				width={640}
				height={480}
			/>
		</div>
	);
}
