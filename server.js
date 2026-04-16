{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 AppleColorEmoji;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red78\green94\blue102;\red239\green245\blue249;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c37647\c44314\c47451;\cssrgb\c94902\c96863\c98039;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
import express from "express";\
import fetch from "node-fetch";\
import cors from "cors";\
\
const app = express();\
app.use(cors());\
\
const PORT = 3000;\
\
// 
\f1 \uc0\u55357 \u56593 
\f0  Replace with your GHL API Key\
const API_KEY = 
\fs28 \cf3 \cb4 pit-8acb2258-17a1-43d7-a80a-2cea18000d25
\fs24 \cf0 \cb1 ;\
\
app.get("/contacts", async (req, res) => \{\
  try \{\
    const response = await fetch("https://rest.gohighlevel.com/v1/contacts/", \{\
      headers: \{\
        Authorization: `Bearer $\{API_KEY\}`,\
        "Content-Type": "application/json"\
      \}\
    \});\
\
    const data = await response.json();\
    res.json(data);\
  \} catch (err) \{\
    res.status(500).json(\{ error: err.message \});\
  \}\
\});\
\
app.listen(PORT, () => console.log(`Server running on $\{PORT\}`));\
}