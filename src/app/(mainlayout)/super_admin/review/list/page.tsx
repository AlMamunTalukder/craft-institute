/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {  Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody"; 
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import award from "../../../../../assets/img/topBar/bg-3.jpg";
import CraftForm from "@/components/Forms/Form";
import CraftSelect from "@/components/Forms/Select";
import { Delete, Edit, Visibility } from "@mui/icons-material";

const events = [
  {
    id: 1,
    img: award,
    sname: "Kamal",
    roll: 1,
    class: "Class 10",
    phone: "+880124639787",
    parent: "Abul Kalam",
    pPhone: "+880124639787",
    email: "abcd@mail.com",
  },
];

const Page = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box padding="0px 0px">
      <Card sx={{marginBottom:4, padding:2, borderRadius: "8px", boxShadow:.5  }} >
      <h1 className=" text-3xl">Review</h1>
      {/* <div className="flex justify-end gap-2">
          <Button
            sx={{ color: "white" }}
            component={Link}
            href="/dashboard/super_admin/admission/newadmission"
          >          
            <PersonAddAltIcon className="h-5 w-5 mr-2" /> New Admission{" "}
          </Button>
        </div> */}
        
        <CraftForm onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item lg={2}>
              <CraftSelect
                items={["one", "two"]}
                fullWidth
                name="branch"
                label="Branch"
              />
            </Grid>
            <Grid item lg={2}>
              <CraftSelect
                items={["one", "two"]}
                fullWidth
                name="shift"
                label="Shift"
              />
            </Grid>
          </Grid>
        </CraftForm>
      </Card >

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Roll</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Parents Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">
                  <Image
                    className="w-10 h-10 rounded-lg"
                    src={row.img}
                    alt="hero"
                  />
                </TableCell>
                <TableCell align="left">{row.sname}</TableCell>
                <TableCell align="left">{row.roll}</TableCell>
                <TableCell align="left">{row.class}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.parent}</TableCell>
                <TableCell align="left">{row.pPhone}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="right">
                  <div className="flex justify-center items-center content-center">
                    <Link href={`/dashboard/student/my-profile/${row.id}`}>
                      <IconButton title="See Profile">
                        <Visibility className="text-green-600" />
                      </IconButton>
                    </Link>
                    <Link href={`/dashboard/super_admin/admission/${row.id}`}>
                      <IconButton title="Edit">
                        <Edit />
                      </IconButton>
                    </Link>
                    <IconButton title="Delete">
                      <Delete className="text-red-600" />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Page;
