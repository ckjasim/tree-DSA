class TrieNode{
  constructor(){
      this.children={}
      this.isEndOfWord=false
  }
}

class Trie{
  constructor(){
      this.root=new TrieNode()
  }
  
  insert(word){
      let node=this.root
      for(let char of word){
          if(!node.children[char]){
              node.children[char]=new TrieNode()
          }
          node=node.children[char]
      }
      node.isEndOfWord=true
  }
  
  search(word) {
      let node = this.root;
      for (let char of word) {
          if (!node.children[char]) {
              return false; // if any character is missing, word doesn't exist
          }
          node = node.children[char];
      }
      return node.isEndOfWord; // return true only if isEndOfWord is true
  }
    startsWith(prefix) {
      let node = this.root;
      for (let char of prefix) {
          if (!node.children[char]) {
              return false; // if any character is missing, prefix is not found
          }
          node = node.children[char];
      }
      return true; // prefix found
  }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); 