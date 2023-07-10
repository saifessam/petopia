export default async function getProducts(): Promise<any> {
	const headers = new Headers;
	headers.append("token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjYxOTc3LCJpYXQiOjE2ODgxMjU5NzcsImp0aSI6IjJhNTgzYzBlMmE5YjQ2ODM4NTBkODgyY2M3ZTE2ZGE0IiwidXNlcl9pZCI6MSwic2NoZW1hX25hbWUiOiJzY2hlbWFfcmJocWVrd2tweXluZXJuZmlrYnl0bmdpIn0.RnKzZHszMi9XbphRn86FKNxYGOssWl-XcKC0Bw4E7yE");

	const options: RequestInit = {
		method: "GET",
		credentials: "include",
		headers,
	};

	const products = await (await fetch("http://acad-ecommerce.noot.ae/products", options)).json();
	return products;
}
