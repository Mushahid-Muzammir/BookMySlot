﻿using BookMySlot.DTOs;
using BookMySlot.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Repositories.BookingContext
{
    public interface IBookingRepository
    {
        Task<string> CreateBookingAsync( [FromBody] BookingDTO booking);
    }
}
