import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// Components
import Layout from "../components/Layout/Layout";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from "./archive.styles";

const archiveTemplate = ({ data }) => <Layout>Archive</Layout>;

export default archiveTemplate;
