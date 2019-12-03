#include <stdio.h>
#include <math.h>

#define MAX_SIZE 20000
#define ARRAY_SIZE 1000

int n[2];
int minDistance = 0;
char field[MAX_SIZE][MAX_SIZE];

struct command {
  char dir;
  int value;
};

command arr[2][ARRAY_SIZE];

void readData() {
  for(int i = 0; i < 2; i++) {
    char tmp = 'a';
    int j = 0;

    while(tmp != '\n') {
      int tmpValue;
      char tmpDir;
      scanf("%c%d", &tmpDir, &tmpValue);
      scanf("%c", &tmp);
      arr[i][j++] = {tmpDir, tmpValue};
    }

    n[i] = j;
  }
}

void print() {
  for(int i = 0; i < MAX_SIZE; i++) {
    for(int j = 0; j < MAX_SIZE; j++) {
      printf("%d", field[i][j]);
    }
    printf("\n");
  }
}

void move(char dir, int *x, int *y) {
  switch (dir) {
    case 'D':
      (*y)++;
      break;
    case 'U':
      (*y)--;
      break;
    case 'L':
      (*x)--;
      break;
    case 'R':
      (*x)++;
      break;
    default:
      printf("Parsing error");
      break;
  }
}

int main() {
  readData();

  int x = MAX_SIZE / 2, y = MAX_SIZE / 2;
  for(int i = 0; i < n[0]; i++) {
    command c = arr[0][i];

    for(int j = 0; j < c.value; j++) {
      move(c.dir, &x, &y);
      field[y][x] = 1;
    }
  }

  // print();

  x = MAX_SIZE / 2;
  y = MAX_SIZE / 2;
  for(int i = 0; i < n[1]; i++) {
    command c = arr[1][i];

    for(int j = 0; j < c.value; j++) {
      move(c.dir, &x, &y);

      if(field[y][x]) {
        int distance = abs(x - MAX_SIZE / 2) + abs(y - MAX_SIZE / 2);
        if((distance < minDistance || minDistance == 0) && distance != 0) {
          minDistance = distance;
        }
      }
    }
  }

  printf("%d\n", minDistance);

  return 0;
}