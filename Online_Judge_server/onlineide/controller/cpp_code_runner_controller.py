from rest_framework.decorators import api_view
from ..serializer.cpp_code_runner_serializer import RunCodeSerializer
from django.http import JsonResponse
from ..service.cpp_code_runner_service import  CppCodeRunnerServcie
from django.http import JsonResponse
from common.createresponse import Response
class CppCodeRunner:

    @api_view(['POST'])
    def runcode(request):
        http_code=0
        response=None
        cpp_code_runner_service = CppCodeRunnerServcie()
        if request != None:
            request_data = RunCodeSerializer(data=request.data)
            if request_data.is_valid():
                ready_data=request_data.validated_data
                output = cpp_code_runner_service.run_code(ready_data["value"],ready_data["input"])
                response = Response.preparedResponse("Success","Code executed successfully",output)
                http_code = 200

        print(http_code)
        print(response)

        return JsonResponse(status=http_code,data=response,safe=False)