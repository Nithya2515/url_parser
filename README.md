# url_parser

From Terminal

#command to clone project

$ git clone git@github.com:Nithya2515/url_parser.git   

# Once clone the project to local machine

#command for install dependencies

$ npm install  

#Command To Start the server

$ npm start


#To check the end points from postman
EXAMPLE:-

Using Post Method:

localhost:4000   #To Validate the url and meta-tag name
 {
    "url": "https://youtube.com",
    "name": "title"
    
}

OUTPUT--
YouTube


---------------
Using Post Method:

localhost:4000/dns   # To check the Text Record in DNS

{
    "url": "https://youtube.com",
    "txt": "facebook-domain-verification=64jdes7le4h7e7lfpi22rijygx58j1"
    
}

OUTPUT--
facebook-domain-verification=64jdes7le4h7e7lfpi22rijygx58j1
