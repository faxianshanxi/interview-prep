#include <stdio.h>
#include <stdlib.h>

char * reverse (char * input) {
    int count = 0;
    int i = 0;
    char * refInput = input;
    while(*input++ != '\0') {
        count++;
    }
    char * out = (char *)(malloc(count + 1));
    while(count-- >= 0) {
        out[i++] = refInput[count-1];
    }
    out[i] = '\0';
    return out;
}
int main() {
    printf("\nInput: %s", "Faxian");
    printf("\nOutput: %s", reverse("Faxian"));
    printf("\n");
    return 0;
}