/*psql data
List of relations
Name
ad                  
 id | title | description | category | instrument | style | user_is_author | band_is_author | place_is_author 
----+-------+-------------+----------+------------+-------+----------------+----------------+-----------------
 public | band                | table | music_and_friends
 public | band_got_instrument | table | music_and_friends
 public | band_got_media      | table | music_and_friends
 public | band_got_style      | table | music_and_friends
 public | band_got_user       | table | music_and_friends
 public | instrument          | table | music_and_friends
 public | media               | table | music_and_friends
 public | place               | table | music_and_friends
 public | style               | table | music_and_friends
 public | user                | table | music_and_friends
 public | user_got_band       | table | music_and_friends
 public | user_got_instrument | table | music_and_friends
 public | user_got_media      | table | music_and_friends
 public | user_got_style      | table | music_and_friends
(15 rows)
*/
export function getResult(){

/*1st Search section
  1-Selon checkbox -> groupes, musiciens, salles  // check typeOf
      - band
      - user(role:musician)
      - place
      

  2-selon multiSelect Field -> par ville(s), par instrument(s), par style(s)
      - user.city
      - instrument
      - style
      
= const result=[]

*/

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
