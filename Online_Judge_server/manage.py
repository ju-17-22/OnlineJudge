#!/usr/bin/env python
import os
import sys
import os
import subprocess
import re

if __name__ == "__main__":
    # ports = ['8000']
    # popen = subprocess.Popen(['netstat', '-lpn'],
    #                          shell=False,
    #                          stdout=subprocess.PIPE)
    # (data, err) = popen.communicate()
    # pattern = "^tcp.*((?:{0})).* (?P<pid>[0-9]*)/.*$"
    # pattern = pattern.format(')|(?:'.join(ports))
    # prog = re.compile(pattern)
    # for line in data.split('\n'):
    #     match = re.match(prog, line)
    #     if match:
    #         pid = match.group('pid')
    #         subprocess.Popen(['kill', '-9', pid])
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Online_Judge_server.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError:
        # The above import may fail for some other reason. Ensure that the
        # issue is really that Django is missing to avoid masking other
        # exceptions on Python 2.
        try:
            import django
        except ImportError:
            raise ImportError(
                "Couldn't import Django. Are you sure it's installed and "
                "available on your PYTHONPATH environment variable? Did you "
                "forget to activate a virtual environment?"
            )
        raise
    execute_from_command_line(sys.argv)
