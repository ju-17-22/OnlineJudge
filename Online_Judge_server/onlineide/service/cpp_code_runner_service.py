from ..config import Constant
import subprocess
import os

class CppCodeRunnerServcie:

    def process_code(self,code):
        file1 = open(Constant.cpp_saved_file_url, "w")  # write mode
        file1.write(code)
        file1.close()

    def process_input(self,input):
        file1 = open(Constant.cpp_input_saved_file_url, "w")  # write mode
        file1.write(input)
        file1.close()

    def run_code(self,code,input):
        self.process_code(code)
        self.process_input(input)
        # create a pipe to a child process
        data, temp = os.pipe()

        # write to STDIN as a byte object(covert string
        # to bytes with encoding utf8)
        os.write(temp, bytes(input, "utf-8"));
        os.close(temp)
        run_command="g++ ";
        run_command+=Constant.cpp_saved_file_url;
        run_command+=" -o out2;./out2"
        # store output of the program as a byte string in s
        s = subprocess.check_output(run_command, stdin=data, shell=True)

        # decode s to a normal string
        return s.decode("utf-8")



