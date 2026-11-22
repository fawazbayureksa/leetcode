// 
const countAndSay = (n) => {
   if (n <= 0) return "";

    // inisiasi angka awal
    let init = "1";

    for(let i = 2; i <= n;i++)
        {
            // variabel next untuk menyimpan value selanjut nya yang akan dihitung
            let next ="";
            // count selalu berawal dari 1, menghitung jumlah karakter
            let count  = 1;
            
            // buat looping untuk mencari berdasarkan jumlah angka dari ke n 

            for (j = 1;j <= init.length;j++){
                // jika value j lebih kecil dari panjang value init yang sekarang, dan init ke j itu masih sama dengan init j sebelumnya maka count nya masih bertambah
                if(j < init.length && init[j] == init[j - 1] ){
                
                    count++;
                
                }
                // jika value nya sudah diluar dari kriteria diatas, waktunya untuk mendefinisikan hasilnya dengan count diawal dan value sekarang setelah itu reset ke 1 lagi
                else {

                    next+=String(count) + init[j - 1];
                    count=1;

                }        
                
        }
        // selalu mengganti ke hasil terakhir
        init = next;
    }

    return init;
}


// 1 = 1
// 2 = 11
// 3 = 21
// 4 = 1211
// 5 = 111221
// 6 = 312211
// 7 = 13112221
// 8 = 1113213211

// const result = countAndSay(1);
// const result2 = countAndSay(2);
const result3 = countAndSay(3);
// const result4 = countAndSay(4);

// result
// result2
result3
// result4

