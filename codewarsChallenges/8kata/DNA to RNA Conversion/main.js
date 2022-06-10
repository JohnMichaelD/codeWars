/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
 */


//my solution
function DNAtoRNA(dna) {
    let rna = "";
    
    for(let i = 0; i < dna.length; i++){
      if(dna[i] === 'G' || dna[i] === 'C' || dna[i] === 'A'){
        rna += dna[i];
      } else if(dna[i] === 'T'){
        rna += 'U';
      }
    }
    return rna;
  }

  //other solution, that splits the string at the 'T', and rejoins with a "U"
  function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }

  //or .split, .map. and replace
  function DNAtoRNA(dna){
    return dna.split("").map(function(rna){
      return rna.replace("T","U")
    }).join("")
  }