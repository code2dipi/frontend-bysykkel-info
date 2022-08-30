import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Table } from 'semantic-ui-react'


const ListStationStatus = () => {

    const [stationInformations,setStationInformations]=useState({})
    const [stationStatus,setStationStatus]=useState({});

    useEffect(()=>{
        fetchStationInformation();
    },
    [])

    useEffect(()=>{
        fetchStationStatus();
    },
    [])

    async function fetchStationInformation(){
        try{
            const response= await axios.get('ny/stations');
            console.log(response);
            setStationInformations(response.data);
        }catch(error){
            console.log(error);
        }
    }

    async function fetchStationStatus(){
        try{
            const response= await axios.get('ny/available');
            console.log(response);
            setStationStatus(response.data);
        }catch(error){
            console.log(error);
        }
    }


  return (
    <>


   <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Antall tilgjenlige låser</Table.HeaderCell>
          <Table.HeaderCell>Ledige sykkler</Table.HeaderCell>
         
        </Table.Row>
      </Table.Header>

      <Table.Body>

      {stationStatus.data.stations.map(station=>(
                 <Table.Row>
                 <Table.Cell>{station.num_docks_available}</Table.Cell>
                 <Table.Cell>{station.num_bikes_available}</Table.Cell>
               </Table.Row>

        )
     )}
      </Table.Body>
    </Table>

</>
    
  )
}



export default ListStationStatus