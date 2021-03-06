module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      clientId: {
        notEmpty: []
      },
      clientSecret: {
        notEmpty: []
      },
      apiToken: {
        notEmpty: []
      },
      redirectUri: {
        type: 'string',
        format: 'uri'
        // notEmpty: []
      }
      // serverType: {
      //   enum: ['production', 'sandbox']
      // }
    },
    required: [],
    additionalProperties: false
  },

  // #1
  getAccessToken: {
    body: {
      type: 'object',
      properties: {
        grant_type: {
          enum: ['authorization_code', 'refresh_token', 'password']
        },
        code: {
          notEmpty: []
        },
        client_id: {
          notEmpty: []
        },
        client_secret: {
          notEmpty: []
        },
        redirect_uri: {
          type: 'string',
          format: 'uri'
        },
        callback_uri: {
          type: 'string',
          format: 'uri'
        },
        username: {
          type: 'string' // Only applicable for password grant type
        },
        identity: {
          type: 'string' // Only applicable for password grant type
        },
        identityType: {
          type: 'string' // Only applicable for password grant type
        },
        password: {
          type: 'string' // Only applicable for password grant type
        },
        code_verifier: {
          type: 'string' // Only applicable if using PKCE for native app login
        }
      },
      required: ['code', 'grant_type', 'client_id', 'client_secret', 'redirect_uri'],
      additionalProperties: false
    }
  },

  // #2
  getAccessTokenByOtp: {
    body: {
      type: 'object',
      properties: {
        grant_type: {
          enum: ['authorization_code', 'refresh_token', 'password']
        },
        code: {
          notEmpty: []
        },
        client_id: {
          notEmpty: []
        },
        client_secret: {
          notEmpty: []
        }
      },
      required: ['code', 'client_id', 'client_secret', 'grant_type'],
      additionalProperties: false
    }
  },

  // #3
  refreshAccessToken: {
    body: {
      type: 'object',
      properties: {
        grant_type: {
          enum: ['authorization_code', 'refresh_token', 'password']
        },
        client_id: {
          notEmpty: []
        },
        client_secret: {
          notEmpty: []
        },
        refresh_token: {
          notEmpty: []
        },
        redirect_uri: {
          type: 'string'
        },
        callback_uri: {
          type: 'string'
        }
      },
      required: ['refresh_token', 'client_id', 'client_secret', 'grant_type'],
      additionalProperties: false
    }
  },

  // #4
  getTokenInfo: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        token_type_hint: {
          enum: ['access_token', 'refresh_token', 'id_token']
        },
        client_id: {
          notEmpty: []
        },
        client_secret: {
          notEmpty: []
        }
      },
      required: ['token', 'client_id', 'client_secret', 'token_type_hint'],
      additionalProperties: false
    }
  },

  // #5
  revokeToken: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        token_type_hint: {
          enum: ['access_token', 'refresh_token', 'id_token']
        },
        client_id: {
          notEmpty: []
        },
        client_secret: {
          notEmpty: []
        }
      },
      required: ['token', 'client_id', 'client_secret', 'token_type_hint'],
      additionalProperties: false
    }
  },

  // #6
  handshake: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        client_id: {
          notEmpty: []
        },
        device_uid: {
          notEmpty: []
        },
        device_lat: {
          type: 'number'
        },
        device_lon: {
          type: 'number'
        },
        device_os: {
          type: 'string'
        },
        device_os_version: {
          type: 'string'
        },
        device_type: {
          enum: ['Mobile Phone', 'Desktop', 'Tablet', 'Console', 'TV Device']
        },
        device_name: {
          type: 'string'
        },
        algorithm: {
          type: 'string'
        }
      },
      required: ['device_uid', 'client_id', 'token'],
      additionalProperties: false
    }
  },

  // #7
  authorize: {
    body: {
      type: 'object',
      properties: {
        authorization: {
          notEmpty: []
        },
        keyId: {
          notEmpty: []
        },
        signature: {
          notEmpty: []
        },
        identity: {
          oneOf: [
            {
              mobile: []
            },
            {
              type: 'string',
              format: 'email'
            }
          ]
        },
        response_type: {
          notEmpty: []
        },
        identityType: {
          type: 'string'
        },
        loginAsUserId: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        client_id: {
          type: 'string'
        },
        redirect_uri: {
          type: 'string',
          format: 'uri'
        },
        callback_uri: {
          type: 'string',
          format: 'uri'
        },
        scope: {
          type: 'string'
        },
        code_challenge: {
          type: 'string'
        },
        code_challenge_method: {
          type: 'string'
        },
        referrer: {
          type: 'string'
        },
        referrerType: {
          enum: ['id', 'username', 'phone_number', 'email', 'nationalcode']
        }
      },
      oneOf: [
        {
          required: ['identity', 'authorization', 'response_type']
        },
        {
          required: ['identity', 'keyId', 'signature', 'response_type']
        }
      ],
      additionalProperties: false
    }
  },

  // #8
  handshakeAndAuthorize: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        client_id: {
          notEmpty: []
        },
        device_uid: {
          notEmpty: []
        },
        device_lat: {
          type: 'number'
        },
        device_lon: {
          type: 'number'
        },
        device_os: {
          type: 'string'
        },
        device_os_version: {
          type: 'string'
        },
        device_type: {
          enum: ['Mobile Phone', 'Desktop', 'Tablet', 'Console', 'TV Device']
        },
        device_name: {
          type: 'string'
        },
        // algorithm: {
        //   type: 'string'
        // },
        identity: {
          oneOf: [
            {
              mobile: []
            },
            {
              type: 'string',
              format: 'email'
            }
          ]
        },
        identityType: {
          type: 'string'
        },
        loginAsUserId: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        redirect_uri: {
          type: 'string',
          format: 'uri'
        },
        callback_uri: {
          type: 'string',
          format: 'uri'
        },
        scope: {
          type: 'string'
        },
        code_challenge: {
          type: 'string'
        },
        code_challenge_method: {
          type: 'string'
        },
        referrer: {
          type: 'string'
        },
        referrerType: {
          enum: ['id', 'username', 'phone_number', 'email', 'nationalcode']
        },
        privateKey: {
          notEmpty: []
        }
      },
      required: ['device_uid', 'identity', 'privateKey', 'token', 'client_id'],
      additionalProperties: false
    }
  },

  // #9
  verify: {
    body: {
      type: 'object',
      properties: {
        authorization: {
          type: 'string'
        },
        keyId: {
          notEmpty: []
        },
        signature: {
          notEmpty: []
        },
        identity: {
          type: 'string'
        },
        otp: {
          type: 'string'
        }
      },
      oneOf: [
        {
          required: ['identity', 'otp', 'keyId', 'signature']
        },
        {
          required: ['identity', 'otp', 'authorization']
        }
      ],
      additionalProperties: false
    }
  },

  // #10
  verifyAndGetAccessToken: {
    body: {
      type: 'object',
      properties: {
        authorization: {
          notEmpty: []
        },
        keyId: {
          notEmpty: []
        },
        signature: {
          notEmpty: []
        },
        identity: {
          notEmpty: []
        },
        otp: {
          notEmpty: []
        },
        client_id: {
          notEmpty: []
        },
        client_secret: {
          notEmpty: []
        }
      },
      oneOf: [
        {
          required: ['identity', 'otp', 'keyId', 'signature', 'client_id', 'client_secret']
        },
        {
          required: ['identity', 'otp', 'authorization', 'client_id', 'client_secret']
        }
      ],
      additionalProperties: false
    }
  },

  // #11
  getLoginUrl: {
    body: {
      type: 'object',
      properties: {
        client_id: {
          notEmpty: []
        },
        response_type: {
          notEmpty: []
        },
        redirect_uri: {
          notEmpty: []
        },
        scope: {
          type: 'array',
          items: {
            notEmpty: []
          }
        }
      },
      required: ['client_id', 'response_type', 'redirect_uri', 'scope'],
      additionalProperties: false
    }
  }
};
