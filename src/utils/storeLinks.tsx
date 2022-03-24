import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os links salvos.
export async function getLinksSave(key: string){

    const myLinks = await AsyncStorage.getItem(key)
    let linkSaves = JSON.parse(myLinks) || [];
    return linkSaves;
}

// Salvar um link no storage.
export async function saveLink(key: string, newlink: any) {
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some( link => link.id === newlink.id);

    if(hasLink){
        console.log('ESSE LINK JA EXISTE NA LISTA');
        return;
    }

    linksStored.push(newlink)
    await AsyncStorage.setItem(key, JSON.stringify(linksStored))
    console.log('LINK SALVO COM SUCESSO')
}

// Deletar algum link especifico.
export async function deleteLink(links: any, id: string) {
    let myLinks = links.filter( (item: any) => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('pastaLinks', JSON.stringify(myLinks));

    console.log('Link deletado do storage');

    return myLinks;

    
}