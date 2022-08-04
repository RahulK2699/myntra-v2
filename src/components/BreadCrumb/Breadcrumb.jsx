import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb({ items = [], currentPage, path }) {
  const navigate = useNavigate();
  return (
    <Stack spacing={2}>
      <Breadcrumbs sx={{ fontSize: 12 }} separator="/" aria-label="breadcrumb">
        {items.map((el, index) => (
          <div key={index + 1}>
            <Link
              className=" cursor-pointer "
              underline="hover"
              key={index + 1}
              color="inherit"
              onClick={(e) => navigate(`${path}`)}
            >
              {el}
            </Link>
          </div>
        ))}
        <Typography
          sx={{ fontSize: 12 }}
          key={items.length - 1}
          color="text.primary"
        >
          {currentPage}
        </Typography>
        ,
      </Breadcrumbs>
    </Stack>
  );
}
