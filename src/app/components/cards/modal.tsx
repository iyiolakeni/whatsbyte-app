'use client';

import React, { useState } from 'react';
import { ModalDetails } from '../interface';
import Image from 'next/image';



export const Modal: React.FC<ModalDetails> = ({
  isOpen, 
  onClose, 
    currentRank = 0,
    currentPercentile = 0,
    currentScore = 0,
  onUpdate
}) => {
  const [rank, setRank] = useState(currentRank);
  const [percentile, setPercentile] = useState(currentPercentile);
  const [score, setScore] = useState(currentScore);

  const [rankError, setRankError] = useState(false);
  const [percentileError, setPercentileError] = useState(false);
  const [scoreError, setScoreError] = useState(false);

const handleUpdate = () => {
    const isRankValid = rank > 0;
    const isPercentileValid = percentile >= 0 && percentile <= 100;
    const isScoreValid = score >= 0 && score <= 15;

    setRankError(!isRankValid);
    setPercentileError(!isPercentileValid);
    setScoreError(!isScoreValid);

    if (isRankValid && isPercentileValid && isScoreValid) {
        onUpdate(rank, percentile, score);
        onClose();
    }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div style={{ width: '550px' }} className="bg-white rounded-lg shadow-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-extrabold">Update scores</h2>
          <Image src={"/assets/html.png"} className="h-10 w-10 cursor-pointer" alt="Close" onClick={onClose} width={24} height={24} />
        </div>

        <div className="space-y-8">
          <div className='flex justify-between'>
            <div className="flex gap-3 justify-center items-center">
                <p className="bg-blue-950 rounded-full w-6 h-6 flex items-center justify-center text-white">1</p>
            <label className="block text-sm font-medium text-gray-700">
              Update your <strong>
                Rank
                </strong>
            </label>
            </div>
            <div className="">
            <input 
              type="number"
              value={rank}
              onChange={(e) => {
                const value = Number(e.target.value);
                setRank(value);
                setRankError(!value);
              }}
              className={`mt-1 block w-36 rounded-md shadow-sm border p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                rankError ? 'border-red-500 focus:border-red-500' : 'border-blue-500 focus:border-indigo-300'
              }`}
            />
            {
                rankError && (
                    <p className="text-red-500 text-xs">require | should be number</p>
                )
            }
            </div>
          </div>

          <div className='flex justify-between'>
          <div className="flex gap-3 justify-center items-center">
                <p className="bg-blue-950 rounded-full w-6 h-6 flex items-center justify-center text-white">2</p>
            <label className="block text-sm font-medium text-gray-700">
              Update your <strong>
                Percentile
                </strong>
            </label>
            </div>
            <div className="">
            <input 
              type="text"
              value={percentile}
              onChange={(e) => {
                const value = Number(e.target.value);
                setPercentile(value);
                setPercentileError(value < 0 || value > 100);
              }}
              className={`mt-1 block w-36 rounded-md shadow-sm border p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                percentileError ? 'border-red-500 focus:border-red-500' : 'border-blue-500 focus:border-indigo-300'
              }`}
            />
            {
                percentileError && (
                    <p className="text-red-500 text-xs">require | percentile 0 - 100</p>
                )
            }
            
            </div>
          </div>

          <div className='flex justify-between'>
          <div className="flex gap-3 justify-center items-center">
                <p className="bg-blue-950 rounded-full w-6 h-6 flex items-center justify-center text-white">3</p>
            <label className="block text-sm font-medium text-gray-700">
              Update your <strong>
                Current Score (out of 15)
                </strong>
            </label>
            </div>
            <div className="">
            <input 
              type="number"
              value={score}
              max={15}
              onChange={(e) => {
                const value = Number(e.target.value);
                setScore(value);
                setScoreError(value < 0 || value > 15);
              }}
              className={`mt-1 block w-36 rounded-md shadow-sm border p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                scoreError ? 'border-red-500 focus:border-red-500' : 'border-blue-500 focus:border-indigo-300'
              }`}
            />
            {
                scoreError && (
                    <p className="text-red-500 text-xs">require | score 0 - 15</p>
                )
            }
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-white text-blue-950 font-bold border border-blue-950 rounded-md"
            >
              cancel
            </button>
            <button 
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-950 font-bold text-white rounded-md hover:bg-indigo-700 flex items-center gap-2 group"
            >
              save
              <span className="group-hover:translate-x-1 transition-transform"> →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
