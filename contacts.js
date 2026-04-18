{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 export default async function handler(req, res) \{\
try \{\
const response = await fetch("https://rest.gohighlevel.com/v1/contacts/", \{\
headers: \{\
Authorization: `Bearer $\{process.env.API_KEY\}`,\
"Content-Type": "application/json"\
\}\
\});\
\
const data = await response.json();\
res.status(200).json(data);\
\} catch (err) \{\
res.status(500).json(\{ error: err.message \});\
\}\
\}}