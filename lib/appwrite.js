import { Client,Account,Avatars } from "react-native-appwrite";

export const client = new Client()
    .setProject(`684e530e000df420f3b1`)
    .setPlatform(`dev.bigyat.todo`)

export const account = new Account(client)
export const avatars = new Avatars(client)