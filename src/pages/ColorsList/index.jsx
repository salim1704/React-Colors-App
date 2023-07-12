import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function colors(){
    useEffect(() => {
        fetchColors()
      }, [])
}

const fetchColors = async () => {
    
}