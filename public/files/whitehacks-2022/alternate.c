#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>

#define BUFSIZE 68

char buf1[BUFSIZE], buf2[BUFSIZE];

void load_cannon()
{
	int idx1, idx2, idx;
	int byte_read1, byte_read2;
	char buf[BUFSIZE];

	memset(buf, BUFSIZE, 0);
	printf("Load up Cannon Alpha: ");
	byte_read1 = fread(buf1, 1, BUFSIZE, stdin);
	printf("Load up Cannon Beta: ");
	byte_read2 = fread(buf2, 1, BUFSIZE, stdin);

	buf1[BUFSIZE-1] = 0;
	buf2[BUFSIZE-1] = 0;

	printf("Launching Cannon....\n");

	if(byte_read1 != byte_read2)
	{
		printf("[!] Two laser cannon did not have the same number of ammo!!\n");
		return;
	}

	for(idx = 0; idx < byte_read1 + byte_read2; idx++)
	{
		idx1 = (idx % 2) ? BUFSIZE - 1 : idx / 2;
		idx2 = (idx % 2) ? idx / 2 : BUFSIZE - 1;
		buf[idx] = buf1[idx1] + buf2[idx2];
	}

	printf("[!] Launched! Did you manage to retrieve what is in the alien's pocket?\n");
}

int main(void)
{
	setvbuf(stdin, NULL, _IONBF, 0);
	setvbuf(stdout, NULL, _IONBF, 0);

	printf("░░░░░░░░░░░░░░░░░░░░░░░░░\n"
		"░░░░░░░▄░▀▄░░░▄▀░▄░░░░░░░\n"
		"░░░░░░░█▄███████▄█░░░░░░░\n"
		"░░░░░░░███▄███▄███░░░░░░░\n"
		"░░░░░░░▀█████████▀░░░░░░░\n"
		"░░░░░░░░▄▀░░░░░▀▄░░░░░░░░\n"
		"░░░░░░░░░░░░░░░░░░░░░░░░░\n");
	printf("[!] Wild alien has appeared!\n");
	printf("##################################################################\n");
	printf("The alien is hiding something inside its pocket. Defeat the alien and clear this level!\n");
	printf("In order to defeat the alien and clear this level, you have to load up two laser cannon.\n");
	printf("[*] Two laser cannon can only hold the same amount of ammo.\n");
	printf("[*] After filling up both cannons, the cannon will automatically start firing!\n");
	printf("##################################################################\n");
	printf("Start loading up cannon.....\n");

	load_cannon();
	return 0;
}
