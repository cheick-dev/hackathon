import { Client, Account, Avatars } from "appwrite";

const client = new Client();

client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject("670a3b770026580ebd5f");

const avatar = new Avatars(client);
const account = new Account(client);

export { avatar, account };
