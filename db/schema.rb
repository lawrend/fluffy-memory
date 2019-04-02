# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_02_231513) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "contract_years", force: :cascade do |t|
    t.bigint "contracts_id"
    t.bigint "years_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contracts_id"], name: "index_contract_years_on_contracts_id"
    t.index ["years_id"], name: "index_contract_years_on_years_id"
  end

  create_table "contracts", force: :cascade do |t|
    t.string "award_ID_PIID"
    t.string "funding_agency"
    t.string "funding_sub_agency"
    t.string "funding_office"
    t.text "award_description"
    t.string "recipient_name"
    t.string "recipient_parent_name"
    t.string "recipient_state"
    t.integer "recipient_congressional_district"
    t.string "naics_description"
    t.float "award"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.string "currency"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "isocode"
  end

  create_table "country_years", force: :cascade do |t|
    t.bigint "country_id"
    t.bigint "year_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "population"
    t.integer "usd_exchange_rate"
    t.index ["country_id"], name: "index_country_years_on_country_id"
    t.index ["year_id"], name: "index_country_years_on_year_id"
  end

  create_table "species", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location"
    t.string "status"
  end

  create_table "species_years", force: :cascade do |t|
    t.bigint "species_id"
    t.bigint "year_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["species_id"], name: "index_species_years_on_species_id"
    t.index ["year_id"], name: "index_species_years_on_year_id"
  end

  create_table "years", force: :cascade do |t|
    t.integer "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "contract_years", "contracts", column: "contracts_id"
  add_foreign_key "contract_years", "years", column: "years_id"
  add_foreign_key "country_years", "countries"
  add_foreign_key "country_years", "years"
  add_foreign_key "species_years", "species"
  add_foreign_key "species_years", "years"
end
