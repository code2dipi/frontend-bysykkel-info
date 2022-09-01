import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Table } from 'semantic-ui-react'



const ListStationStatus = () => {

    const [stationStatus,setStationStatus]=useState([]);

  

    useEffect(()=>{
        fetchStationStatus();
    },
    [])

    async function fetchStationStatus(){
        try{
            const response= await axios.get('/ny/results');
            console.log(response);
            setStationStatus(response.data);
        }catch(error){
            console.log(error);
        }
    }


  return (
    <>
    <div style={{color:'red',font:'bold',fontSize:'large',alignContent:'center',textAlign:'center',backgroud:'floralWhite',margin:'10px'}}>Oslobysykkel Sanntid Status:</div>

      
   <Table celled compact definition>
      <Table.Header fullWidth content>
        <Table.Row>
        <Table.HeaderCell>Stasjon-Id</Table.HeaderCell>  
        <Table.HeaderCell>Navn</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Ledige sykkler</Table.HeaderCell>
        <Table.HeaderCell>Antall tilgjenlige låser</Table.HeaderCell>
         
        </Table.Row>
      </Table.Header>

      <Table.Body>

      {stationStatus.map(station=>(
                 <Table.Row>
                 <Table.Cell>{station.staionId}</Table.Cell>
                 <Table.Cell>{station.name}</Table.Cell>
                 <Table.Cell>{station.address}</Table.Cell>
                 <Table.Cell>{station.numOfbikesAvailable}</Table.Cell>
                 <Table.Cell>{station.numOfDocksAvailable}</Table.Cell>
               </Table.Row>

        )
     )}
      </Table.Body>
    </Table>

</>
    
  )
}



export default ListStationStatus
