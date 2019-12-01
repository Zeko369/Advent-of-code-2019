#include <iostream>
#include <fstream>
using namespace std;

int calc(int num) {
    return num / 3 - 2;
}

int calc_with_fuel(int num) {
    int tmp = calc(num);

    if(tmp <= 0) {
        return 0;
    }

    return tmp + calc_with_fuel(tmp);
}

int main () {
    ifstream myfile;
    myfile.open("in.txt");

    int tmp, sum = 0, sum_rek = 0;

    for(int i = 0; i < 100; i++) {
        myfile >> tmp;
        sum += calc(tmp);
        sum_rek += calc_with_fuel(tmp);
    }

    myfile.close();

    cout << sum << endl << sum_rek << endl;

    return 0;
}