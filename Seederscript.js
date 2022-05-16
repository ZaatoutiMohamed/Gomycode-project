const express = require("express");
const productsData = require("../data/dataP");
const Product = require("../Models/Product.js");

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data import success");
  } catch (error) {
    console.error("error with data import");
  }
};
importData();
