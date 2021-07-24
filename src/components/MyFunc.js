import React, { useState, useEffect } from 'react'

export default function MyFunc(params) {
  useEffect(() => {
    console.log(insSort([1, 3, 0, -4, 4, 12, -13]));
  }, [])

  return (
    <div>

    </div>
  )
};

function bbs(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  let i, j, minIndex;
  for (i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
}

function insSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
