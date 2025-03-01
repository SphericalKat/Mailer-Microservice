define({ "api": [
  {
    "type": "post",
    "url": "/sendMail/:customEmail",
    "title": "",
    "version": "0.2.0",
    "name": "SendCustomMail",
    "group": "Send_Mail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventName",
            "description": "<p>Name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailSubject",
            "description": "<p>Subject of the mail to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailBody",
            "description": "<p>Body of the mail to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isMarkdown",
            "description": "<p>Whether the mail body is formatted with markdown</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customEmail",
            "description": "<p>The email of the person to send a mail to</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "sendQR",
            "description": "<p>Whether QR should be send as an attachment or not</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>A token to authorize use of this endpoint</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "err",
            "description": "<p>Errors, if any</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>The request body validation check failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MailNotSent",
            "description": "<p>The mail was not sent due to an error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Validation-Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"err\": [\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"mailSubject\",\n            \"location\": \"body\"\n        },\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"mailBody\",\n            \"location\": \"body\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Mail-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"MailNotSent\",\n    \"err\": {\n        \"message\": \"Bad Request\",\n        \"code\": 400,\n        \"response\": {\n            \"headers\": {\n                \"server\": \"nginx\",\n                \"date\": \"Tue, 13 Aug 2019 05:32:53 GMT\",\n                \"content-type\": \"application/json\",\n                \"content-length\": \"209\",\n                \"connection\": \"close\",\n                \"access-control-allow-origin\": \"https://sendgrid.api-docs.io\",\n                \"access-control-allow-methods\": \"POST\",\n                \"access-control-allow-headers\": \"Authorization, Content-Type, On-behalf-of, x-sg-elas-acl\",\n                \"access-control-max-age\": \"600\",\n                \"x-no-cors-reason\": \"https://sendgrid.com/docs/Classroom/Basics/API/cors.html\"\n            },\n            \"body\": {\n                \"errors\": [\n                    {\n                       \"message\": \"The attachment content must be base64 encoded.\",\n                       \"field\": \"attachments.0.content\",\n                       \"help\": \"http://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/errors.html#message.attachments.content\"\n                    }\n                ]\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "Send_Mail"
  },
  {
    "type": "post",
    "url": "/sendMail/:customEmail",
    "title": "",
    "version": "0.1.0",
    "name": "SendCustomMail",
    "group": "Send_Mail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventName",
            "description": "<p>Name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailSubject",
            "description": "<p>Subject of the mail to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailBody",
            "description": "<p>Body of the mail to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isMarkdown",
            "description": "<p>Whether the mail body is formatted with markdown</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customEmail",
            "description": "<p>The email of the person to send a mail to</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>A token to authorize use of this endpoint</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "err",
            "description": "<p>Errors, if any</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>The request body validation check failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MailNotSent",
            "description": "<p>The mail was not sent due to an error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Validation-Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"err\": [\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"mailSubject\",\n            \"location\": \"body\"\n        },\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"mailBody\",\n            \"location\": \"body\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Mail-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"MailNotSent\",\n    \"err\": {\n        \"message\": \"Bad Request\",\n        \"code\": 400,\n        \"response\": {\n            \"headers\": {\n                \"server\": \"nginx\",\n                \"date\": \"Tue, 13 Aug 2019 05:32:53 GMT\",\n                \"content-type\": \"application/json\",\n                \"content-length\": \"209\",\n                \"connection\": \"close\",\n                \"access-control-allow-origin\": \"https://sendgrid.api-docs.io\",\n                \"access-control-allow-methods\": \"POST\",\n                \"access-control-allow-headers\": \"Authorization, Content-Type, On-behalf-of, x-sg-elas-acl\",\n                \"access-control-max-age\": \"600\",\n                \"x-no-cors-reason\": \"https://sendgrid.com/docs/Classroom/Basics/API/cors.html\"\n            },\n            \"body\": {\n                \"errors\": [\n                    {\n                       \"message\": \"The attachment content must be base64 encoded.\",\n                       \"field\": \"attachments.0.content\",\n                       \"help\": \"http://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/errors.html#message.attachments.content\"\n                    }\n                ]\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index-old.js",
    "groupTitle": "Send_Mail"
  },
  {
    "type": "post",
    "url": "/sendMail",
    "title": "",
    "version": "0.2.0",
    "name": "SendMail",
    "group": "Send_Mail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventName",
            "description": "<p>Name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailSubject",
            "description": "<p>Subject of the mail to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailBody",
            "description": "<p>Body of the mail to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"absent\"",
              "\"present\"",
              "\"both\""
            ],
            "optional": false,
            "field": "sendTo",
            "description": "<p>Target audience</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isMarkdown",
            "description": "<p>Whether the mail body is formatted with markdown</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "day",
            "description": "<p>The event day</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The key to search hades backend for. Can be empty</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>The key to search hades backend. Can be empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "sendQR",
            "description": "<p>Whether QR should be send as an attachment or not</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>A token to authorize use of this endpoint</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "err",
            "description": "<p>Errors, if any</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>The request body validation check failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParticipantsEmpty",
            "description": "<p>The participants list is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Validation-Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"err\": [\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"mailSubject\",\n            \"location\": \"body\"\n        },\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"mailBody\",\n            \"location\": \"body\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Participants-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"EmptyParticipants\",\n    \"err\": \"Participant list is empty\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "Send_Mail"
  },
  {
    "type": "post",
    "url": "/sendMail",
    "title": "",
    "version": "0.1.0",
    "name": "SendMail",
    "group": "Send_Mail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventName",
            "description": "<p>Name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailSubject",
            "description": "<p>Subject of the mail to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailBody",
            "description": "<p>Body of the mail to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"absent\"",
              "\"present\"",
              "\"both\""
            ],
            "optional": false,
            "field": "sendTo",
            "description": "<p>Target audience</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isMarkdown",
            "description": "<p>Whether the mail body is formatted with markdown</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "day",
            "description": "<p>The event day</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The key to search hades backend for. Can be empty</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>The key to search hades backend. Can be empty</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>A token to authorize use of this endpoint</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "err",
            "description": "<p>Errors, if any</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>The request body validation check failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParticipantsEmpty",
            "description": "<p>The participants list is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Validation-Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"err\": [\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"mailSubject\",\n            \"location\": \"body\"\n        },\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"mailBody\",\n            \"location\": \"body\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Participants-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"EmptyParticipants\",\n    \"err\": \"Participant list is empty\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index-old.js",
    "groupTitle": "Send_Mail"
  }
] });
