#!/usr/bin/env python3

from pwn import *

elf = context.binary = ELF("baby_HOF")

libc = elf.libc
## uncomment and comment above this when using remote
## libc = ELF("") # add your libc path

gs = '''
continue
'''
def start():
    ## Uncomment below to use as remote exploit
    #return remote("127.0.0.1", 55555)
    if args.GDB:
        return gdb.debug(elf.path, gdbscript=gs)
    else:
        return process(elf.path)

def malloc(size, data):
    io.send("1\n".encode("ISO-8859-1"))
    io.sendafter("> ".encode("ISO-8859-1"), f"{size}\n".encode("ISO_8859-1"))
    io.sendafter("> ".encode("ISO-8859-1"), f"{data}\n".encode("ISO-8859-1"))
    io.recvuntil("> ".encode("ISO-8859-1"))

# Calculate the "wraparound" distance between two addresses.
def delta(x, y):
    return (0xffffffffffffffff - x) + y

io = start()

io.recvuntil('Heap @'.encode("ISO-8859-1"))
heap = int(io.recvline(), 16) +0x240
io.recvuntil('puts() @'.encode("ISO-8859-1"))
puts = int(io.recvline(), 16)
libc.address = int(puts) - libc.sym.puts
io.timeout = 1

log.success(f"heap @ {hex(heap)}") ## Takes leaked Heap address
log.success(f"libc address @ {hex(libc.address)}") ## Takes libc address
io.recvuntil(">".encode("ISO-8859-1"))

### Edit here to add your exploit ###






###

io.interactive()
