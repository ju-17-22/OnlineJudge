from typing import Any

class Response:

    def __init__(self):
       self.status = ""
       self.message = ""
       self.object = {}


    def get_status(self):
        return self.status

    def set_status(self, status):
        self.status = status

    def get_message(self):
        return self.message

    def set_message(self, message):
        self.message = message

    def get_object(self):
        return self.object

    def set_object(self, object):
        self.object = object

    def preparedResponse(status, message, object):
        responseData = Response()
        responseData.set_status(status)
        responseData.set_message(message)
        responseData.set_object(object)
        responseData = responseData.__dict__
        return responseData