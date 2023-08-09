import React,{useState}from 'react'
import { View, Text, TextInput, StyleSheet, Button} from 'react-native'
import axios from 'axios'


const Search = () => {




    

    const [searchVal,setSearchVal] = React.useState("")

    // const [search,setSearch] = React.useState(false)

    async function handleSearch(){
        setSearchVal("")
        console.log("Searched")
        const options = {
            method: 'GET',
            url: 'https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/',
            params: {user: 'joshh_gg99'},
            headers: {
              'X-RapidAPI-Key': '4609395bf4msh0a051990b0f7d8ap1b8345jsn7f67590e2261',
              'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
    }






  return (
    <View style={styles.container} >

      <TextInput style={SearchStyles.container} onChangeText={(e)=>{setSearchVal(e)}} value = {searchVal}></TextInput>
      <Button title="Search" onPress={()=>{handleSearch()}}></Button>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height: 200,
      width:200,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const SearchStyles = StyleSheet.create({
    container: {
        borderColor:"black",
        borderWidth:3,
      height: 40,
      width:200,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  

export default Search