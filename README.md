# SpaceBlog assignment

## Build / Run cmd

 - Please run npm i in both root and /server
 - npm run start in root directory

In any event it is not working, please execute npm run dev in root, and npx nodemon in ./server directory.

## Framework / libraries used

- react - front end library
- material ui - ui library
- rsuite - date range picker
- react-query - handling of API response
- zustand - state management
- mongoose - DB

## End point 

- /getComments - retrieved all comments base on article
- /getMatrix - retrieved the numbers of comments base on user and date entered
- /postComment - storing the comments in DB


## Sample Response 

- /getComments \
{
    "success": true,
    "message": "comments retrieved",
    "payload": [
        {
            "_id": "6673e54bf27c0751a72a580d",
            "commentId": "24148",
            "comments": [
                {
                    "name": "Alvis",
                    "comment": "asdasd",
                    "date": "Thu Jun 20 2024 16:16:11 GMT+0800 (Singapore Standard Time)",
                    "_id": "6673e54bf27c0751a72a580e"
                },
                {
                    "name": "Alvis",
                    "comment": "asdasd",
                    "date": "Thu Jun 20 2024 16:16:11 GMT+0800 (Singapore Standard Time)",
                    "_id": "6673e54bf27c0751a72a5816"
                },
                {
                    "name": "Alvis",
                    "comment": "asdasd",
                    "date": "Thu Jun 20 2024 16:16:12 GMT+0800 (Singapore Standard Time)",
                    "_id": "6673e54cf27c0751a72a5826"
                },
                {
                    "name": "Alvis",
                    "comment": "asdasd",
                    "date": "Thu Jun 20 2024 16:16:12 GMT+0800 (Singapore Standard Time)",
                    "_id": "6673e54cf27c0751a72a583a"
                },
            ],
            "date": "1718871371308",
            "__v": 0
        }
    ],
    "code": 200
}


- /getMatrix \
{
    "success": true,
    "message": "Matrix Sent",
    "payload": {
        "userComment": [
            {
                "_id": "6673e54bf27c0751a72a5809",
                "userName": "Alvis",
                "comments": 8,
                "lowerCase": "alvis",
                "date": "2024-06-20T08:16:11.257Z",
                "__v": 0
            },
            {
                "_id": "6673e65ef27c0751a72a5903",
                "userName": "daphne",
                "comments": 5,
                "lowerCase": "daphne",
                "date": "2024-06-20T08:20:46.890Z",
                "__v": 0
            },
            {
                "_id": "6673e665f27c0751a72a5a12",
                "userName": "alan",
                "comments": 3,
                "lowerCase": "alan",
                "date": "2024-06-20T08:20:53.029Z",
                "__v": 0
            },
            {
                "_id": "6673e667f27c0751a72a5ae5",
                "userName": "asdasd",
                "comments": 21,
                "lowerCase": "asdasd",
                "date": "2024-06-20T08:20:55.569Z",
                "__v": 0
            },
            {
                "_id": "6673ed9234e315fee698d0d2",
                "userName": "asd",
                "comments": 25,
                "lowerCase": "asd",
                "date": "2024-06-20T08:51:30.044Z",
                "__v": 0
            },
            {
                "_id": "6673ee2ae5a3fc824c489890",
                "userName": "sdf",
                "comments": 12,
                "lowerCase": "sdf",
                "date": "2024-06-20T08:54:02.854Z",
                "__v": 0
            }
        ],
        "dateComment": [
            {
                "_id": "6673e54bf27c0751a72a580b",
                "date": "2052024",
                "comments": 21,
                "updatedDate": "2024-06-20T08:16:11.277Z",
                "__v": 0
            }
        ]
    },
    "code": 200

}

- /postComment \
Payload - {"id":"24149","commentInput":"asd","name":"asd"} \

{
    "success": true,
    "message": "comment have been added",
    "code": 200
}
