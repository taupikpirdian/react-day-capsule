#!/bin/bash

commit_msg_file=$1
commit_msg=$(cat $commit_msg_file)

if ! [[ $commit_msg =~ ^(feat|fix|ci): .+$]]; then
  echo "Invalid commit message format. Please use one of the following formats:"
  echo "feat:[a-z][a-z]: message"
  echo "fix:[a-z][a-z]: message"
  echo "ci:[a-z][a-z]: message"
  exit 1
fi
