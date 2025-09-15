#!/usr/bin/env node

import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local') });

const prisma = new PrismaClient();

async function showAllTables() {
  try {
    console.log('🔍 Fetching all tables and their records...\n');

    // Get all tables from the database
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `;

    console.log('📋 Available tables:');
    tables.forEach((table, index) => {
      console.log(`  ${index + 1}. ${table.table_name}`);
    });
    console.log('');

    // Show records for each table
    for (const table of tables) {
      const tableName = table.table_name;
      console.log(`\n📊 Table: ${tableName}`);
      console.log('='.repeat(50));

      try {
        // Get record count
        const countResult = await prisma.$queryRaw`
          SELECT COUNT(*) as count FROM ${tableName}
        `;
        const count = countResult[0].count;

        if (count === 0) {
          console.log('  No records found.');
          continue;
        }

        console.log(`  Total records: ${count}`);

        // Get all records (limit to 10 for readability)
        const records = await prisma.$queryRaw`
          SELECT * FROM ${tableName} LIMIT 10
        `;

        if (records.length > 0) {
          console.log('\n  Sample records:');
          console.log('  ' + '-'.repeat(40));

          records.forEach((record, index) => {
            console.log(`  Record ${index + 1}:`);
            Object.entries(record).forEach(([key, value]) => {
              console.log(`    ${key}: ${value}`);
            });
            console.log('');
          });

          if (count > 10) {
            console.log(`  ... and ${count - 10} more records`);
          }
        }
      } catch (error) {
        console.log(`  ❌ Error reading table ${tableName}: ${error.message}`);
      }
    }

    // Also show Prisma model data specifically
    console.log('\n\n🎯 Prisma Models Data:');
    console.log('='.repeat(50));

    // Show Stats table data using Prisma client
    try {
      const statsRecords = await prisma.stats.findMany();
      console.log(`\n📈 Stats table (${statsRecords.length} records):`);

      if (statsRecords.length === 0) {
        console.log('  No stats records found.');
      } else {
        statsRecords.forEach((record, index) => {
          console.log(`  Record ${index + 1}:`);
          console.log(`    type: ${record.type}`);
          console.log(`    slug: ${record.slug}`);
          console.log(`    views: ${record.views}`);
          console.log(`    loves: ${record.loves}`);
          console.log(`    applauses: ${record.applauses}`);
          console.log(`    ideas: ${record.ideas}`);
          console.log(`    bullseye: ${record.bullseye}`);
          console.log('');
        });
      }
    } catch (error) {
      console.log(`  ❌ Error reading Stats table: ${error.message}`);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
showAllTables()
  .then(() => {
    console.log('\n✅ Script completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
