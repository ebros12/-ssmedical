
import { TableContainer, Paper, Grid } from '@mui/material';
import { useState } from "react";

import TableCotizacion from "./TableCotizacion";


export default function CotizList() {

  return (

    <TableContainer className="TableContainer" component={Grid}>
       <TableCotizacion key='table'  />
    </TableContainer>
  );
}