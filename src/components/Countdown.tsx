"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import { BIRTHDAY_DATE } from '../config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  // Set this to your girlfriend's birthday
  const birthdayDate = new Date(BIRTHDAY_DATE);
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = birthdayDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsBirthday(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdayDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center mb-4">
            <FaCalendarAlt className="text-primary text-2xl mr-2" />
            <h2 className="section-title mb-0">
              {isBirthday ? "It's Your Birthday Today!" : "Countdown to Your Special Day"}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isBirthday 
              ? "The wait is over! It's time to celebrate YOU!" 
              : "Counting down every second until we can celebrate your amazing day together!"}
          </p>
        </motion.div>

        {isBirthday ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-center"
          >
            <div className="inline-block bg-primary text-white text-4xl md:text-6xl font-bold py-6 px-10 rounded-2xl shadow-lg">
              🎉 Happy Birthday! 🎂
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 w-36 md:w-40 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                >
                  {unit.value}
                </motion.div>
                <p className="text-gray-600 font-medium">{unit.label}</p>
              </motion.div>
            ))}
          </div>
        )}
        
        {!isBirthday && (
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="inline-flex items-center text-primary">
              <FaClock className="mr-2" />
              <p className="text-lg font-medium">
                Mark your calendar for {birthdayDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Countdown; 