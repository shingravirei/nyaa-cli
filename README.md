# Nyaa-cli

**Usage**

By default you only need to pass a search term. This will return a table with 10 items.
```bash
nyaa-cli -s <search-term>
```




Alternatively you could pass a category or number of items to return. This way you can filter the results.
```bash
nyaa-cli -s <search-term> -c <category> -n <number-of-items>
```
Then you just need to type the index of the magnet that you want to download, and it will open on your torrent client automaticaly. Also, you can download more than one magnet, just pass a list of idnexes separated by spaces.