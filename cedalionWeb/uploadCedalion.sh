#!/bin/sh

baseURL="http://localhost:5984/cedalion"
doc="main"


for fileName in cedalion.js logic.js index.html; do
	contentType=text/javascript
	if [ $fileName = 'index.html' ] ; then
		contentType=text/html
	fi
	curl -D .head $baseURL/$doc
	docRev=`grep -i ETag .head | cut -d'"' -f2`
	curl -X PUT -H "content-type: $contentType" "$baseURL/$doc/$fileName?rev=$docRev" --data-binary @$fileName
done

