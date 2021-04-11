﻿// <auto-generated />
using Bingo.Infraestructura;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Bingo.Infraestructura.Migrations
{
    [DbContext(typeof(BingoContext))]
    [Migration("20210410230337_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.5");

            modelBuilder.Entity("Bingo.Domain.Entities.Carton", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("JugadorID")
                        .HasColumnType("text");

                    b.Property<string>("codigo")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Cartones");
                });
#pragma warning restore 612, 618
        }
    }
}
