export const getData = <T extends Record<string, string | boolean>>(current: HTMLDivElement) => {
	const data: Record<string, string | boolean> = {};
	current.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name]`)
		.forEach((el) => {
			if (el.type == `checkbox`) {
				data[el.name] = (el as HTMLInputElement).checked;
			} else if (el.type != `file`) {
				data[el.name] = el.value.trim();
			}
		})
	return data as T;
}