import NodeRSA from 'node-rsa';

var _rsa;
var _rsa2;
class Key{
    privateKey() {
        const privatePem = '-----BEGIN PRIVATE KEY-----\n'+
        'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDlYnVlvSQfQ4Pe\n'+
        'r42+HrDQXAcmFjj/PcmREreJ2vVga/RVA66hr/wwxHsCA6nfXCzE0s3F5c+m+kwo\n'+
        'IqCx8PgXj9dq5OfeALvd0RSVHaL+yu7rNY9R0YDWI48pbKUTj4n5J6QOI9ZVJUOH\n'+
        'jSpOaw0rpQq+Kb8Gf9xqZbifDtvgKEHl0sYk+vpF5rSom8MwmxUfTgaM0aU5hWtt\n'+
        'S1EGhvOUGy+zaZWYwdWxGLbPWR3Z+tk8Pgh5EYSe3ItAhqFzd6aIRcLUeZoWsbit\n'+
        'X+1ceYBGTGafV+M2Qv9rSjbhhQN3gWoihT0V+mazdBLOCW481QGAoNkDG1XqqkOH\n'+
        '4x6M+tOlAgMBAAECggEARN77+pEAcHaX+FtjRmr2kYigCNpxQIlvpKQnATgBpnKj\n'+
        'SIczfo5VPNsxR5iL/2kwc+QLLljisPLDvOUwtFxyULi6Z/jUeT5lKaNl96OPVcre\n'+
        'UzagkmNBuImyqTBam/Xj6i/xvOEbsDLhBKjow+S2bp0+DXyBQ1VOe4+REAipEbLS\n'+
        '7BJUmsbQCM3VJDqVKkzCtMBV0KCnWt11bF7LfoMLfWTwdl57IZ1WpYD+NpgCYknr\n'+
        'fgYvOToXlLydKKEkateCoCzjtUGnv1BChF/NXprox14G2zX1SY1Ow9Cib+/WvEVY\n'+
        '0VgYJMZ4b48gAhbSg3GCp0v1PZwdOfmalf/b7AjxgQKBgQD+r63BdcfYMq/S0Obe\n'+
        'zWE/m5gk6S00e7Hq2obYsscWffP91xoAW4Tvtz//NAw1Po1Br0sPHhGeeI8jzYig\n'+
        'qo99Bc+iy/UFoxivsteKtbYeTWWoAdrZe5N2DrdWrEDYHy9/V6kP4lKoL4BT7lmX\n'+
        'bPcDIvKWvkRO+jLZb97TLxWp4QKBgQDmkV5EWr7j5EaPYjqXidPwUll9PZxmfuy5\n'+
        'n/hKg7lHzYMWScQEWCZSiM5uDYa9JkSgQUys8RSFxd5t334c8Fq/x8/HgrRDDDTS\n'+
        'BANSPYimajV97QI3T17bUuBBtiC76XWxnfNGtAtIJiepXYKHsaueAKaCx1b709iv\n'+
        'CiES5ClKRQKBgCkbjf4V1qXMuJhcY4c+ux2bLZl3kXZRKMxxbSZ45K16svEb0PSR\n'+
        '0QkoGMpGSloluIMLmh/ciJd9eg0bVZwpK3PQhk0OgoPgaVGimiunXLfTYj8V3Y8Q\n'+
        '5SI/CdSRhP3dOrthGMaZjyHaWOozJH7Odagp8eHm3/unYqG57stDZEnBAoGBAKAB\n'+
        'MZHuB5rOx8ipOk//bfzQqRmor+jRHCaVRREw6FtT2yyUdFsvcSjFl7v31xFchTNR\n'+
        'HYzGoJ9U+U72UeZzRgbg+uhRZBdDWUSFVGi2Gyahfg2tdGQ9yG4bzVTMt1qwYOSp\n'+
        '4DGosEuZbtyx7+uK+LXlbahD/bE1CqIuPVWG0MChAoGACXE5eeR8UpwD//xS0EH/\n'+
        'jNwbyZmVsyfKSV5TD8LdWvDZ1XloqfFHi8gfZtkeDMpcg/IJmxfYaE9hrRqk0G8a\n'+
        'lIsBq3YVeJTQMLe8rc73IFVHL1c9qZZWJAHfwNcrKFtfV3FtFXKxkqLZxuPlJDfb\n'+
        'udd0UKHFJPjYHHObRncYMNg=\n'+
        '-----END PRIVATE KEY-----'; 
        _rsa = new NodeRSA(privatePem, "pkcs8-private-pem");

        return _rsa;
    }

    publicKey() {
        const publicKey = '-----BEGIN PUBLIC KEY-----\n'+
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAorpbIfheHnyS+Hq8DpPq\n'+
        'V8EWdfVyTMP6GzcRElCRsMnixwalVB605ZI0xq4Cd9ZvLg4TTCGFCiL/mvbrij8A\n'+
        'JqGypRWefxOE69TXQYC6V44dRfjoVHFOPfvz023Y90/JI7nZ3ROWFkOsSAXLZvO7\n'+
        'AKtSm/2rRUFtmZ4u6icai9q3IIwiqFqHLaXTVhw/J1FHcEUS4yb6SvRlr8HJ2EzP\n'+
        'W80LV4KNxveKjc9NO5IkFh+1bcWueq7JbmiVas9QmMFuwYYYDRxpkqTMcFCNeUSV\n'+
        'Lwd0XwZmFQOnyq08zv7sQQeTyIXe3qaA4odglTbFZVKtU+IDa6Kary6kRcwyplhC\n'+
        'FQIDAQAB\n'+
        '-----END PUBLIC KEY-----';

        _rsa2 = new NodeRSA(publicKey, "pkcs8-public-pem");
        return _rsa2;
    }
}

export default Key;