from sense_emu import SenseHat 
from time import time, sleep

sense = SenseHat()
sense.clear()




while True:
    sleep(10 - time() % 10)
    temp = sense.get_temperature()
    print(temp)
    f = open("temp.txt","w")
    f.write(str(temp))
    f.close()
