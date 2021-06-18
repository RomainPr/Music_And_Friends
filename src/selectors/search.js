/*psql data
List of relations
Name
-> ad                  
id | title | description | category | instrument | style | user_is_author | band_is_author | place_is_author 

-> band
id |band_name|admin_firstname| admin_lastname | password | description            

-> band_got_instrument 
        band_id | instrument_id 

-> band_got_media    
        band_id | media_id 

-> band_got_style
        band_id | style_id 

-> band_got_user
        band_id | user_id 

-> instrument
id | name 

-> media 
id | file_name | file_type | file_URL 

-> place
id | name | description |  city  |           

-> style
id | name 

-> user
id |firstname| lastname |pseudo|phone|email |password |   

-> user_got_band
        user_id | band_id 

-> user_got_instrument
        user_id | instrument_id 

-> user_got_media   
        user_id | media_id 

-> user_got_style   
        user_id | style_id 

(15 rows)
*/
export function findSearchResult(
  searchResult,
  band, 
  user, 
  place,
  isBandChecked,
  isMusicianChecked,
  isPlaceChecked
  ) {

    console.log(searchResult);
    console.log(band);
    console.log(user);
    console.log(place);

  if (isBandChecked) {
    searchResult = band.find((band_name) => {
      console.log(band);
      return band_name;
    });

  } else if (isMusicianChecked) {
    searchResult = user.find((pseudo) => {
      console.log(pseudo)
      return pseudo;
    });

  } else if (isPlaceChecked) {
    searchResult = place.find((name) => {
      console.log(place)
      return name;
    });
  }
  return searchResult;
}
/*1st Search section
  1-Selon checkbox 
  > groupes, musiciens, salles

  If isBandChecked = true -> searchResult = state.band
  If isMusicianChecked = true -> searchResult = state.user
  If isPlaceChecked = true -> searchResult = state.place

  bdd
      - band
      - user
      - place
      

  2-selon multiSelect Field -> par ville(s), par instrument(s), par style(s)
      - user.city
      - instrument
      - style
      
= const result=[]

*/


export function filterSearchResult() {
  /*2nd Search section
    Selon multiSelect Field -> Tous, Profils, Annonces de result
        - TOUS = result + ad (filtré selon section 1) 
            if select 
              - add.instrument
              - add.style
              - add.category (groupe,musicien,salles)
              - result
  */
}
